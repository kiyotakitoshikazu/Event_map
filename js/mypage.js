document.addEventListener('DOMContentLoaded', () => {
    const photoForm = document.getElementById('photo-form');
    const photoFile = document.getElementById('photo-file');
    const photoDescription = document.getElementById('photo-description');

    photoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // フォームデータを処理するためのコード
        const file = photoFile.files[0];
        const description = photoDescription.value;
        if (file && description) {
            // ここにファイルと説明を送信するコードを書く
            alert('写真が投稿されました');
        }
    });

    const reviewForm = document.getElementById('review-form');
    const reviewText = document.getElementById('review-text');

    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // フォームデータを処理するためのコード
        const review = reviewText.value;
        if (review) {
            // ここにレビューを送信するコードを書く
            alert('レビューが投稿されました');
        }
    });
});
