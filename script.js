document.addEventListener("DOMContentLoaded", function() {
    fetch('file-list.json')
        .then(response => response.json())
        .then(data => {
            const fileList = document.getElementById('file-list');
            data.files.forEach(file => {
                const fileItem = document.createElement('div');
                fileItem.className = 'file-item';
                fileItem.innerHTML = `<span>${file.name}</span><span>${file.date}</span>`;
                fileList.appendChild(fileItem);
            });
        })
        .catch(error => console.error('Error fetching file list:', error));
});
