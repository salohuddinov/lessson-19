const loading = document.getElementById("loading");

const loadingDuration = 500; // 1s

setTimeout(() => {
    loading.classList.add('loading-none');
}, loadingDuration);