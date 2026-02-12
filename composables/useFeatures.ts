export const useFeatures = () => {
  const config = useRuntimeConfig();

  return {
    internalLinksFooter: config.public.featurePostInternalLinksFooter,
    postListViewToggle: config.public.featurePostListViewToggle,
    search: config.public.featureSearch,
    socialShare: config.public.featureSocialShare,
  };
};
