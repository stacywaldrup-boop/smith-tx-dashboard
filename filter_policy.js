(function (root, factory) {
  "use strict";
  var policy = factory();
  if (typeof module === "object" && module.exports) module.exports = policy;
  if (root) root.SmithFilterPolicy = policy;
}(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";

  function includeByReviewMode(recordIsReview, reviewOnly) {
    return reviewOnly ? !!recordIsReview : !recordIsReview;
  }

  return { includeByReviewMode: includeByReviewMode };
}));
