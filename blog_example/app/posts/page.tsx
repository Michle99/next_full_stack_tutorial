
import { getAllPosts } from "@/fetch_posts_libs/posts";
import { Box, VStack, Heading, Tag, TagLabel, Text } from "@chakra-ui/react";

type PostType = {
    id: number;
    title: string;
    body: string;
    userId: number;
    tags: Array<string>;
    reactions: number;
}

export default async function PostsPage () {
    const {posts} = await getAllPosts();

    return(
        <div>
            <hr style={{ width: '220px' }} />
            <VStack spacing={4} align="start" justify="center">
                {posts.map((post: PostType) => (
                    <Box
                        key={post.id}
                        maxW="md"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="md"
                    >
                        <Box p={4}>
                            <Heading as="h3" size="md" mb={2}>
                                {post.title}
                            </Heading>
                            <Text color="gray.500">{post.body}</Text>
                        </Box>
                        <Box p={4}>
                            <VStack spacing={2}>
                                {post.tags.map(tag => (
                                    <Tag key={tag} size="sm" colorScheme="teal">
                                        <TagLabel>{tag}</TagLabel>
                                    </Tag>
                                ))}
                            </VStack>
                        </Box>
                    </Box>
                ))}
            </VStack>
        </div>
    );
}


