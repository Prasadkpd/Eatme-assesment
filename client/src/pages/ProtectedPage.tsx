import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

type UserRole = 'student' | 'teacher' | 'admin';

export function RequireAuth({
  children // role,
}: {
  children: ReactNode;
  role?: UserRole;
}) {
  // const [claims, setClaims] = useState<Record<string, unknown>>();

  // useEffect(() => {
  //   auth.onIdTokenChanged(async (user: any) => {
  //     if (user) {
  //       localStorage.setItem('check_token', await user?.getIdToken());
  //     } else {
  //       localStorage.removeItem('show-admin-teacher-switch');
  //       localStorage.removeItem('home-path');
  //       localStorage.removeItem('check_token');
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   auth.currentUser?.getIdTokenResult().then((result) => {
  //     if (result.claims['admin'] && result.claims['teacher']) {
  //       sessionStorage.setItem('show-admin-teacher-switch', '1');
  //     }

  //     setClaims(result.claims);
  //   });
  // }, [user, loading]);

  // if (!user && !loading) return <Navigate to="/login" />;

  // if (claims /* && !authenticators.isLoading */) {
  // if (!role) return children;

  // if (claims && claims[role]) return children;

  // todo: once backend student sighup is done remove this
  // if (role === 'admin') {
  return children;
  /*  if (
      authenticators.data?.length > 0 ||
      sessionStorage.getItem('bypass_webauthn') === 'true'
    )
      return children;
    else return <Navigate to="/register" />; */
  // }
  // }
  // redirect to sign up page
  // return <Navigate to="/login" />;
  // }

  // return (
  //   <div style={ { height: '100vh', display: 'grid', placeItems: 'center' } }>
  //     <Space direction="vertical" align="center">
  //       <Logo dark={ true } />
  //       <ThemeConfigProvider>
  //         <Spin size="large" style={ { marginTop: '2rem' } } />
  //       </ThemeConfigProvider>
  //     </Space>
  //   </div>
  // );
}

export const ProtectedPage = ({ userRole }: { userRole?: UserRole }) => (
  <RequireAuth role={userRole}>
    <Outlet />
  </RequireAuth>
);
