

url_list = ['https://www.amazon.com/Watership-Down-Novel-Puffin-Books-ebook/dp/B002NXOQF2/ref=sr_1_1',
'https://www.amazon.com/Tales-Watership-Down-Puffin-Books-ebook/dp/B006414I8Y/ref=sr_1_2',
'https://www.amazon.com/Call-Wild-Jack-London-ebook/dp/B085GCV633/ref=sr_1_4',
'https://www.amazon.com/Wrinkle-Time-Quintet-Book-ebook/dp/B004OA64H0/ref=sr_1_5',
'https://www.amazon.com/Edge-Dark-Sea-Darkness-Wingfeather-ebook/dp/B0015DRQ3A/ref=sr_1_7',
'https://www.amazon.com/Green-Ember-Book-ebook/dp/B00QZ6BYNA/ref=sr_1_9',
'https://www.amazon.com/Embers-End-Green-Ember-Book-ebook/dp/B084JK3RH4/ref=sr_1_12']

function getBsr(url) {
    $.ajax({
        url: url,
        type: 'GET',
        success: function(response) {
            let l = new DOMParser, 
            soup = l.parseFromString(response, "text/html")

            let bsr = soup.querySelector('#detailBulletsWrapper_feature_div > ul:nth-child(5) > li > span').textContent.trim().split('#')[1].split(' ')[0].replaceAll(',', '')

            console.log(bsr)

        }
    })
}

function getAllBsr() {
    for (url of url_list) {
        getBsr(url)
    }
}