export class AuthorService {
    getAuthors() {
        return [
            {
                name: 'John Tim',
                isLiked: true,
                likeCount: 120
            }, 
            {
                name: 'Tim Cook',
                isLiked: true,
                likeCount: 2300
            }, 
            {
                name: 'Bill Gates',
                isLiked: false,
                likeCount: 4500
            }, 
            {
                name: 'David Jone',
                isLiked: true,
                likeCount: 230
            }                                    
        ];
    }
    
    updateLikeCount(isLiked, authorName) {
        console.log('updating likeCount for ' 
        + authorName + ' with isLiked value ', isLiked);
    }
}