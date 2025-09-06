import { Helmet, HelmetData } from 'react-helmet-async';
import { useLocation } from 'react-router';

import { env } from '@/config/env';

type HeadProps = {
  title?: string;
  description?: string;
  ogImage?: string;
};

const helmetData = new HelmetData({});

const DEFAULT_TITLE = 'Forumate';
const DEFAULT_DESCRIPTION =
  'Create conversations, share ideas, and connect with the community.';
const OG_IMAGE_PATH = '/open-graph/og-image.jpg';
const APP_NAME = env.APP_NAME;
const APP_URL = env.APP_URL;

export const Head = ({
  title,
  description = DEFAULT_DESCRIPTION,
}: HeadProps = {}) => {
  const location = useLocation();

  const url = `${APP_URL}${location.pathname}${location.search}`;
  const headTitle = title ? `${title} | ${APP_NAME}` : DEFAULT_TITLE;

  return (
    <Helmet
      helmetData={helmetData}
      title={title ? `${title} | Forumate` : undefined}
      defaultTitle="Forumate"
    >
      <meta name="description" content={description} />

      <meta property="og:title" content={headTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={APP_NAME} />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content={`${APP_URL}${OG_IMAGE_PATH}`}
      />

      <link rel="canonical" href={url} />
    </Helmet>
  );
};
