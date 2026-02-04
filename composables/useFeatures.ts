export const useFeatures = () => {
  const config = useRuntimeConfig();

  return {
    internalLinksFooter: config.public.featurePostInternalLinksFooter,
  };
};
