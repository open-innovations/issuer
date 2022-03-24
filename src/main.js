import Issuer from './Issuer.svelte';

if (!window.oi) window.oi = {};

window.oi.issuer = (config = {}) => {
  const { target, owner = 'open-innovations', repo, endpoint, heading } = config;

  new Issuer({
    target,
    props: {
      endpoint,
      owner,
      repo,
      heading,
    },
  });
};
