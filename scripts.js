$(document).ready(function () {
    $('#toggleButton').on('click', function () {
        toggleNfts()
    });

    $('#toggleLink').on('click', function (e) {
        e.preventDefault();
        toggleHiddenCaption()
    });
});

const toggleNfts = function () {
    if ($('#nftCardContainer').hasClass('hidden')) {
        $('#nftCardContainer').removeClass('hidden');
        $('#toggleButton').text('Hide Super Rare Secret NFT Collection');
    } else {
        $('#nftCardContainer').addClass('hidden');
        $('#toggleButton').text('Display Super Rare Secret NFT Collection');
    }

}

const toggleHiddenCaption = function () {
    $('#hiddenCaption').removeClass('hidden');
    $('#hiddenCaption').show();

    setTimeout(() => {
        $('#hiddenCaption').fadeOut(5000, function () {
            // Animation complete.
        });
    }, 5000);

}
