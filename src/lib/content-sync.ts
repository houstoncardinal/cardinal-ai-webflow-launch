import { supabase } from "@/integrations/supabase/client";
import { importFacebookPosts } from "./facebook";

export const syncContent = async (facebookAccessToken: string) => {
  try {
    // Import Facebook posts
    await importFacebookPosts(facebookAccessToken);
    
    // Return success
    return { success: true, message: 'Content sync completed successfully' };
  } catch (error) {
    console.error('Error syncing content:', error);
    return { 
      success: false, 
      message: 'Failed to sync content',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};
