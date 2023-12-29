"use client"

import { getSinglePost } from "@/fetch_posts_libs/posts";
import { Box, Container, Heading, Text, Link, HStack, Tag, TagLabel, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"

type ParamsType = {
  params: {
   id: string;
  }
};

type PostType = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: number;
}
export default function SinglePost( {params}: ParamsType) {
    const [post, setPost] = useState<PostType | null>(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const {post} = await getSinglePost(params.id);
            console.log("postData from page.tsx:", post);
            setPost(post as PostType);
        } catch (error) {
            console.error("Error fetching post:", error);
        }
        };

        fetchData();
    }, [params.id]);

    return (
        <Container 
            m="10" 
            p={15} 
            maxW='md' 
            bg='blue.600' 
            color='white' 
            centerContent
            textAlign="center"
            alignItems="center"
            mx="auto"
        >
          <Link color="red" href="/">Back Home</Link>
            <VStack spacing={4} align="start" justify="center">
             {post ? (
                <Box
                  key={post.id}
                  maxW="md"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                >
                  <Box p={4}>
                    <Heading color="white" as="h2" mb={4}>
                     {post?.title}
                    </Heading>
                  </Box>
                  <Box p={2}>
                    <Text>{post?.body}</Text>
                  </Box>
                  <Box p={4}>
                    <HStack spacing={2}>
                      {post?.tags.map((tag, index) => 
                        <Tag key={index} size="sm" colorScheme="teal" >
                         <TagLabel>{tag}</TagLabel>
                        </Tag>
                       )}
                    </HStack>
                  </Box>
                </Box>
             ):
             (
                <Text>Loading....</Text>
             )}
            </VStack>
        </Container>
    );
}