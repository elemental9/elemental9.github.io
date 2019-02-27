module.exports = {
    globDirectory: ".",
    globPatterns: ["**/*.*"],
    swSrc: "sw.js",
    swDest: "service-worker.js",
    globIgnores: [
        "CNAME",
        "LICENSE",
        "sw.js",
        "README.md"
    ]
};
