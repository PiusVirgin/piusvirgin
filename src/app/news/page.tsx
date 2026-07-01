import BreakingNews from "@/components/news/breaking-news/breaking-news";
import CategoryNav from "@/components/news/category-nav/category-nav";
import Coverage from "@/components/news/coverage/Coverage";
import EditorPick from "@/components/news/editor-pick/editor-pick";
import FeaturedStories from "@/components/news/featured/FeaturedStories";
import Hero from "@/components/news/hero/hero";
import LatestStories from "@/components/news/latest-stories/latest-stories";
import Newsletter from "@/components/news/newsletter/Newsletter";

const NewsPage = () => {
  return (
    <>
      {/* <Hero />
      <BreakingNews />
      <CategoryNav />
      <EditorPick />
      <LatestStories />
      <Coverage />
      <FeaturedStories/> */}

      {/* <Hero /> */}
      <EditorPick />
      <BreakingNews />
      <CategoryNav />
      <LatestStories />
      <FeaturedStories />
      <Coverage />
      <Newsletter/>
    </>
  );
};

export default NewsPage;
