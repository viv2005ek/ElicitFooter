function openSocialMedia(type) {
  let url;

  if (type === "linkedin") {
    url = "https://www.linkedin.com";
  } else if (type === "instagram") {
    url = "https://www.instagram.com";
  } else if (type === "facebook") {
    url = "https://www.facebook.com";
  } else if (type === "youtube") {
    url = "https://www.youtube.com";
  } else {
    console.log("Unsupported social media type");
    return;
  }
  window.open(url, "_blank");
}

export default openSocialMedia;
