import React, { Fragment } from 'react';
import componentsList from 'Configs/router/componentsList';

function View( viewName ) {

  const ComponentToRender = componentsList[ viewName ].component;
  const MetaToRender = componentsList[ viewName ].meta;

  return (
    <Fragment>
      <MetaToRender />
      <ComponentToRender />
    </Fragment>
  );
}

export default View;
