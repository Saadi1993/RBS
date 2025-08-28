document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from(".btn", { opacity: 0, scale: 0.5, duration: 1, delay: 1 });

    gsap.from(".about h2", { opacity: 0, x: -50, duration: 1, delay: 1.5 });
    gsap.from(".about p", { opacity: 0, x: 50, duration: 1, delay: 2 });

    gsap.from(".highlight", { opacity: 0, y: 30, duration: 1, stagger: 0.3, delay: 2.5 });

    gsap.from(".services h2, .portfolio h2, .blog h2, .contact h2", { opacity: 0, y: 30, duration: 1, stagger: 0.3, delay: 3 });

    gsap.from(".service img, .project img, .post img", { opacity: 0, scale: 0.8, duration: 1, stagger: 0.3, delay: 3.5 });
});
