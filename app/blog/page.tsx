import { Metadata } from "next"
import { allPosts } from "@/.contentlayer/generated"
import { compareDesc } from "date-fns"

import PageHeading from "@/components/page-heading"
import FilteredPost from "@/components/posts/filtered-posts"

export const metadata: Metadata = {
  title: "Blog",
}

const BlogPage = () => {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
  console.log("posts", posts)
  return (
    <>
      <PageHeading
        title="Blog"
        description={`In December 2022, I began producing articles, mostly regarding software and information sharing. On my blog, I have written ${posts.length} items in total. In the search box below, you can look for articles by title.`}
      />

      <FilteredPost posts={posts} />
    </>
  )
}

export default BlogPage
