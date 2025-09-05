import { Helmet, HelmetData } from 'react-helmet-async';

import { env } from '@/config/env';

type HeadProps = {
  title?: string;
  description?: string;
};

const helmetData = new HelmetData({});

export const Head = ({
  title = '',
  description = '',
}: HeadProps = {}) => {
  return (
    <Helmet
      helmetData={helmetData}
      title={title ? `${title} | Forumate` : undefined}
      defaultTitle="Forumate"
    >
      <link rel="canonical" href={env.APP_URL} />
      <meta name="description" content={description} />
    </Helmet>
  );
};
