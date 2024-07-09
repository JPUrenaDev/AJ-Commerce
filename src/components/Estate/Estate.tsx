import { CarouselComponent } from "./Carousel";
import { Recommended } from "./Recommended";
import { SellYourEstate } from "./SellYourEstate";
import { OurAgents } from "./OurAgents";
import { Category } from "./Category";
import { RecentPosts } from "./RecentPosts";
import { LifestyleBased } from "./LifestyleBased";
import { Ads } from "./Ads";
import { ExploreOurBlog } from "./ExploreOurBlog";
import { DiscoverYourDreamProperty } from "./DiscoverYourDreamProperty";

export const Estate = () => {
  return (
    <>
      <DiscoverYourDreamProperty />
      <CarouselComponent />
      <Recommended />
      <SellYourEstate />
      <OurAgents />
      <Category />
      <RecentPosts />
      <LifestyleBased />
      <Ads />
      <ExploreOurBlog />
    </>
  );
};
