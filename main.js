document.addEventListener("DOMContentLoaded", () => {
    const jobInput = document.getElementById("input1");
    const customerInput = document.getElementById("input2");
    const mblInput = document.getElementById("input3");
    const hblInput = document.getElementById("input4");

    // Create a dropdown container
    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown-menu");
    dropdown.style.position = "absolute";
    dropdown.style.display = "none";
    document.body.appendChild(dropdown); // Attach to body for accurate positioning

    // Show filtered job IDs in dropdown
    jobInput.addEventListener("input", () => {
        const query = jobInput.value.toUpperCase();
        dropdown.innerHTML = "";
        dropdown.style.display = query ? "block" : "none";

        // Calculate the position below the input box
        const inputRect = jobInput.getBoundingClientRect();
        dropdown.style.left = `${inputRect.left}px`;
        dropdown.style.top = `${inputRect.bottom + window.scrollY}px`;
        dropdown.style.width = `${inputRect.width}px`;

        // Filter job IDs
        const filteredJobs = jobData.filter(job => job.jobId.startsWith(query));

        // Populate dropdown with matching job IDs
        filteredJobs.forEach(job => {
            const item = document.createElement("a");
            item.classList.add("dropdown-item");
            item.textContent = job.jobId;
            item.style.cursor = "pointer";
            item.onclick = () => selectJob(job);
            dropdown.appendChild(item);
        });
    });

    // Function to handle job selection
    function selectJob(job) {
        jobInput.value = job.jobId;
        customerInput.value = job.customer;
        mblInput.value = job.mbl;
        hblInput.value = job.hbl;
        dropdown.style.display = "none";
    }

    // Hide dropdown if clicking outside of it
    document.addEventListener("click", (e) => {
        if (!jobInput.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = "none";
        }
    });
});
