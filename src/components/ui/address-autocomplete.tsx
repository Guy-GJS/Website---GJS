import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Loader } from '@googlemaps/js-api-loader';

interface AddressAutocompleteProps {
  id: string;
  placeholder?: string;
  value: string;
  onChange: (value: string, placeDetails?: google.maps.places.PlaceResult) => void;
  className?: string;
  required?: boolean;
}

export const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({
  id,
  placeholder = "Property Address",
  value,
  onChange,
  className,
  required = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Keep track of the internal value separate from parent's value
  const [internalValue, setInternalValue] = useState(value);
  
  // Track if we just selected from Google - this prevents parent updates from overriding
  const justSelectedFromGoogle = useRef(false);
  
  // Only sync with parent value if it's an intentional change (not empty when we have a value)
  useEffect(() => {
    // If we just selected from Google, don't let parent override
    if (justSelectedFromGoogle.current) {
      justSelectedFromGoogle.current = false;
      return;
    }
    
    // If parent is clearing the value (empty string) but we have a value, keep our value
    // This prevents the value from being cleared when other form fields change
    if (value === '' && internalValue !== '') {
      // Don't update internal value - keep what we have
      // Don't call onChange here to avoid infinite loop
      return;
    }
    
    // Otherwise, sync with parent value only if it's different
    if (value !== internalValue) {
      setInternalValue(value);
    }
  }, [value, internalValue]);

  useEffect(() => {
    const initializeGoogleMaps = async () => {
      try {
        const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
        if (!apiKey) {
          setError('Google Places API key not found.');
          return;
        }
        const loader = new Loader({ apiKey, version: 'weekly', libraries: ['places'] });
        await loader.load();
        setIsLoaded(true);
      } catch (e) {
        console.error('Error loading Google Maps:', e);
        setError('Failed to load Google Maps.');
      }
    };
    initializeGoogleMaps();
  }, []);

  useEffect(() => {
    if (isLoaded && inputRef.current && !autocompleteRef.current) {
      autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
        types: ['address'],
        componentRestrictions: { country: 'us' },
        fields: ['formatted_address', 'address_components', 'geometry', 'name', 'place_id'],
      });

      const listener = autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current?.getPlace();
        if (place && place.formatted_address) {
          const fullAddress = place.formatted_address;
          justSelectedFromGoogle.current = true;
          setInternalValue(fullAddress);
          onChange(fullAddress, place);
        }
      });

      return () => {
        if (listener) {
          google.maps.event.removeListener(listener);
        }
      };
    }
  }, [isLoaded]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange(newValue);
  }, [onChange]);

  const commonInputProps = {
    ref: inputRef,
    id,
    type: "text" as const,
    placeholder: isLoaded ? placeholder : "Loading Address...",
    value: internalValue, // Use internal value
    onChange: handleInputChange,
    className,
    required,
    disabled: !isLoaded,
    autoComplete: "off",
  };

  if (error) {
    return (
      <div className="space-y-2">
        <Input {...commonInputProps} placeholder="Error loading address field" />
        <p className="text-xs text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <Input {...commonInputProps} />
      {!isLoaded && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <div className="w-4 h-4 border-2 border-gray-300 border-t-primary rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};