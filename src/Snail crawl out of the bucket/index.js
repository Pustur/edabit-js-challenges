const CRAWL_DISTANCE_PER_MINUTE = 5;
const CRAWL_MINUTES = 30;
const CRAWL_DISTANCE = CRAWL_MINUTES * CRAWL_DISTANCE_PER_MINUTE;
const REST_DISTANCE_PER_MINUTE = 3;
const REST_MINUTES = 10;
const REST_DISTANCE = REST_MINUTES * REST_DISTANCE_PER_MINUTE;
const CYCLE_DISTANCE = CRAWL_DISTANCE - REST_DISTANCE;

const cal = depth => {
  if (depth <= CRAWL_DISTANCE) {
    return Math.ceil(depth / CRAWL_DISTANCE_PER_MINUTE);
  }

  const fullCycles = Math.floor(depth / CYCLE_DISTANCE);
  const crawlDistanceLeft = depth % CYCLE_DISTANCE;

  return (
    fullCycles * (CRAWL_MINUTES + REST_MINUTES) +
    Math.ceil(crawlDistanceLeft / CRAWL_DISTANCE_PER_MINUTE)
  );
};

export default cal;
