import { supabase } from "@/integrations/supabase/client";

export const uploadBlogImage = async (imageFile: File, slug: string): Promise<string | null> => {
  try {
    const fileExt = imageFile.name.split('.').pop();
    const fileName = `${slug}-hero.${fileExt}`;
    const filePath = `blog/images/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('public')
      .upload(filePath, imageFile, {
        cacheControl: '3600',
        upsert: true
      });

    if (uploadError) {
      throw uploadError;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('public')
      .getPublicUrl(filePath);

    return publicUrl;
  } catch (error) {
    console.error('Error uploading blog image:', error);
    return null;
  }
};
