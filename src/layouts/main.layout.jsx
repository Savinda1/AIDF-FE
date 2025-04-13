import { Outlet } from "react-router";
import Navigation from '@/components/Navigation';

function MainLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default MainLayout;