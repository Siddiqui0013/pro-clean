"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useUser } from '@/context';

export default function Component() {
  const router = useRouter();
  const { user } = useUser();
  
  useEffect(() => {
    if (!user) {
        router.push('/login');
        } else {
        router.push(`/dashboard/${user.role}`);
        }
  }, [router, user]);
  
  return <></>;
}