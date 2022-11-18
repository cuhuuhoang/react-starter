import React from "react";

export const uniqueId = () => {
  return "id" + Math.random().toString(16).slice(2);
}

export const displayUrlTrim = (prefix, url, suffix, maxLength=50) => {
  if (url == null || url.length === 0) {
    return null;
  }
  return (
    <React.Fragment>
      {prefix}
      <a href={url} target="_blank">{url.length > maxLength ? url.substring(0, maxLength) + '...' : url}</a>
      {suffix}
    </React.Fragment>
  );
}

export const timestampToString = (timestamp) => {
  const d = new Date(timestamp);
  return  timeToString(d);
}

export const timeToString = (d) => {
  return  d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " +
    ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);
}

export const choose = (src, ...keys) => keys.reduce((result, key) => ({ ...result, [key]: src[key] }), {});

export const round2 = (num) => {
  return Math.round(num * 100) / 100
};
