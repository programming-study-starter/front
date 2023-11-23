import { useLoginDataStore, setLoginCookieData } from '@/components/modal/login/LoginStore';

export default function UserAlert() {
  const email = useLoginDataStore((state) => state.email);

  return (
    <>
    </>
  );
}