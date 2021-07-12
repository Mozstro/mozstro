import React, { FunctionComponent } from 'react';
import { MetaProps } from '../types/layout';
import Meta from './meta';
import Footer from './footer';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const Layout: FunctionComponent<LayoutProps> = (
  {
    children,
    customMeta
  }) =>
  <div>
    <Meta customMeta={customMeta}/>
    <main className="min-h-screen container mx-auto mt-4 px-6">
      <div>{children}</div>
    </main>
    <Footer/>
  </div>
;

export default Layout;
