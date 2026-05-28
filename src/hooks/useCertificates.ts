import { useState, useEffect } from 'react';

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  url?: string;
  description?: string;
  skills?: string[];
  logo?: string;
}

export function useCertificates() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/certificates.json');

        if (!response.ok) {
          throw new Error('Failed to load certificates');
        }

        const data = await response.json();
        setCertificates(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        console.error('Error loading certificates:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  return { certificates, loading, error };
}

// Made with Bob
