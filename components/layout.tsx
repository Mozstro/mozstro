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
    <main className="container mx-auto px-6 mt-6">
      <div>{children}</div>
    </main>
    <Footer/>
  </div>
;

export default Layout;
