export default {
  async paths() {
    try {
      const response = await fetch(
        "https://api.paymenter.org/extensions?limit=999&longDescription=true",
      );

      if (!response.ok) {
        throw new Error("Failed to fetch marketplace items");
      }

      const data = await response.json();

      if (!data || !Array.isArray(data.extensions)) {
        throw new Error("Invalid API response structure");
      }

      return data.extensions.map((item) => {
        const slug = `${item.resource_id}-${item.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "")}`;

        return {
          params: {
            id: slug,
            resource_id: item.resource_id,
            name: item.name,
            author: item.author === "CorwinDev" ? "Paymenter" : item.author,
            image: item.image_url,
            url: item.url,
            description: item.tag_line,
            type: item.type,
            long_description: item.long_description,
            rating: item.review_average,
            downloads: item.download_count,
            last_update: item.last_update_date,
            review_count: item.review_count,
            purchase_count: item.purchase_count,
            price: item.price,
          },
        };
      });
    } catch (error) {
      console.error("Error fetching marketplace items:", error);
      return [];
    }
  },
};
