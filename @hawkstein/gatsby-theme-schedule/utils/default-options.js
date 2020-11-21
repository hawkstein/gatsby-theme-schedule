//https://gist.github.com/mathewbyrne/1280286
const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, "") // Trim - from end of text

module.exports = (themeOptions) => {
  const basePath = themeOptions.basePath || "/"
  const collection = themeOptions.collection || "events"
  const useCollectionInURLs = themeOptions.useCollectionInURLs || false
  const contentPath = themeOptions.contentPath || "src/events"
  const heading = themeOptions.heading || "Events Schedule"
  const locationsOrder = themeOptions.locationsOrder || []
  const locationsLabel = themeOptions.locationsLabel || "Locations"
  const locationsSlug = themeOptions.locationsSlug || slugify(locationsLabel)
  const locationsURL = `${basePath}${locationsSlug}`
  const scheduleLabel = themeOptions.scheduleLabel || "Schedule"
  const scheduleSlug = themeOptions.scheduleSlug || slugify(scheduleLabel)
  const scheduleURL = `${basePath}${scheduleSlug}`
  const use24Hour = themeOptions.use24Hour || true
  const navLinks = themeOptions.navLinks || []
  const footerLinks = themeOptions.footerLinks || []
  const actionLabel = themeOptions.actionLabel || "Buy Tickets"
  const actionURL = themeOptions.actionURL || "/buy"
  const remarkImageOptions = {
    maxWidth: 1200,
    withWebp: true,
    ...themeOptions.remarkImageOptions,
  }
  return {
    basePath,
    collection,
    useCollectionInURLs,
    contentPath,
    heading,
    locationsOrder,
    locationsLabel,
    locationsSlug,
    locationsURL,
    scheduleLabel,
    scheduleSlug,
    scheduleURL,
    use24Hour,
    navLinks,
    footerLinks,
    actionLabel,
    actionURL,
    remarkImageOptions,
  }
}
