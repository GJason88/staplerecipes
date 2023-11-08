/* eslint-disable @typescript-eslint/no-unused-vars */

interface LayoutState {
  isMobile: boolean;
  breadcrumbs: Array<BreadcrumbState>;
  activeRoute: string;
}

interface BreadcrumbState {
  name: string;
  href: string;
}
