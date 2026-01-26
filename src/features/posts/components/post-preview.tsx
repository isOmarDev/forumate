import { formatDistanceToNowStrict } from 'date-fns';
import { BookmarkIcon } from 'lucide-react';
import { Link } from 'react-router';

import { UserAvatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item';
import { Stack } from '@/components/ui/stack';
import type { Post } from '@/types/api';

export type PostPreviewVariant = 'feed' | 'topic' | 'profile';

type PostPreviewProps = { post: Post; variant?: PostPreviewVariant };

const POST_PREVIEW_CONFIG: Record<
  PostPreviewVariant,
  {
    showTopic: boolean;
  }
> = {
  feed: {
    showTopic: true,
  },
  topic: {
    showTopic: false,
  },
  profile: {
    showTopic: true,
  },
};

export const PostPreview = ({
  post,
  variant = 'feed',
}: PostPreviewProps) => {
  const { showTopic } = POST_PREVIEW_CONFIG[variant];

  return (
    <Item className="p-0">
      <article>
        <Link to="/contact" className="absolute inset-0" />

        <div>
          <ItemHeader className="mb-5 items-start">
            <Stack className="flex" align="center" gap={2}>
              <ItemMedia>
                <UserAvatar
                  imageUrl={post.author.profileImageUrl}
                  firstName={post.author.firstName}
                  lastName={post.author.lastName}
                />
              </ItemMedia>

              <div>
                <Stack
                  className="relative flex-wrap gap-1 text-[13px]"
                  align="center"
                >
                  <Link to="" className="font-medium">
                    {`${post.author.firstName} ${post.author.lastName}`}
                  </Link>

                  {showTopic && (
                    <>
                      <span className="text-muted-foreground">
                        in
                      </span>
                      <Link
                        to={post.topic.path}
                        className="hover:underline"
                      >
                        {post.topic.name}
                      </Link>
                    </>
                  )}
                </Stack>

                <span className="text-xs text-primary">
                  {formatDistanceToNowStrict(
                    new Date(post.createdAt),
                    {
                      addSuffix: true,
                    },
                  )}
                </span>
              </div>
            </Stack>

            <ItemActions>
              <Button variant="ghost" size="icon">
                <BookmarkIcon className="size-5" />
              </Button>
            </ItemActions>
          </ItemHeader>

          <ItemContent className="gap-2">
            <ItemTitle
              className="text-2xl group-hover/item:text-foreground-hover"
              asChild
            >
              <h2>{post.title}</h2>
            </ItemTitle>
            <ItemDescription className="line-clamp-3">
              {post.body}
            </ItemDescription>
          </ItemContent>

          <ItemFooter></ItemFooter>
        </div>
      </article>
    </Item>
  );
};
