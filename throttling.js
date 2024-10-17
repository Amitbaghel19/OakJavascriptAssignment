const throttle = (func, limit) => {
    let inThrottle;
    return function () {
      if (!inThrottle) {
        func();
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };
  const callApi = function () {
    console.log("api calling");
  };
  
  const throttled = throttle(callApi, 200);
  
  document.getElementById("search-input").addEventListener('input', function (e) {
    throttled();
  });
  