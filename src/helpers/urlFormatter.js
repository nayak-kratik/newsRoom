export function formatUrl(source) {
  const formattedUrl = [];
  for (let d in source)
    formattedUrl.push(
      encodeURIComponent(d) + "=" + encodeURIComponent(source[d])
    );
  return formattedUrl.join("&");
}
