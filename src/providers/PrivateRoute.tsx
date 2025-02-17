'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
      const router = useRouter();
      const [loading, setLoading] = useState(true);
      const isAuthenticated = () => {
            return localStorage.getItem('accessToken') !== null;
      };

      useEffect(() => {
            if (!isAuthenticated()) {
                  router.push('/');
            }
            setLoading(false);
      }, [router]);

      if (loading) {
            return <div>Loading...</div>;
      }

      return <>{children}</>;
};

export default PrivateRoute;
