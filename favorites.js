$(document).ready(function() {
    $('.delete-btn').click(function() {
        console.log('Delete button clicked');  
        var word = $(this).data('word');
        console.log('Word to remove:', word);  
        if (confirm('Are you sure you want to remove "' + word + '" from favorites?')) {
            $.ajax({
                url: '/remove_favorite/' + word,
                type: 'DELETE',
                success: function(response) {
                    console.log('Delete success:', response);  // Add this line
                    // Show a pop-up message after successful deletion
                    alert('Word "' + word + '" has been removed from favorites.');
                    // Reload the page after successful deletion
                    window.location.reload();
                },
                error: function(xhr, status, error) {
                    console.error('Error:', error);
                }
            });
        }
    });
});
