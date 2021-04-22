const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const reducer = (sum, acc) => {
        return sum + acc['likes']
    }
    return blogs.length === 0 ? 0 : blogs.reduce(reducer,0)
}

const favoriteBlog = (blogs) => {
    const reducer = (sum, acc) => {
        return acc.likes > sum.likes ? 
        {"title":acc.title, "author":acc.author,"likes": acc.likes} : 
        {"title":sum.title, "author":sum.author,"likes": sum.likes}
    }
    return blogs.length === 0 ? {} : blogs.reduce(reducer)
}

const mostBlogs = (blogs) => {

    const authors = blogs.map(b => b.author)
    const blogCount = authors.reduce((sum,acc) => {
        sum[acc] ? sum[acc] ++ : sum[acc] = 1
        return sum
    },{})
    const highestblogcount = Object.keys(blogCount).reduce((sum, acc) => {
        return blogCount[sum] > blogCount[acc] ? sum : acc
    })
    const mostblogs = {"author":highestblogcount,"blogs":Math.max.apply(null,Object.values(blogCount))}
    return mostblogs
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}