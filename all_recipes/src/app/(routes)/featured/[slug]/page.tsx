import FeaturedContainer from "@/app/features/recipes/containers/FeaturedContainer";

export default function Featured({ params }: { params: { slug: string } }) {
  return (
    <>
      <FeaturedContainer slug={params.slug} />
    </>
  );
}
