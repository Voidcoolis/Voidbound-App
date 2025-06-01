import { COLORS } from '@/constants/theme'
import { styles } from '@/styles/feed.styles'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

//todo: add the actual type of post
export default function Post({post}: {post:any}) {
    const [isLiked, setIsLiked] = useState(post.isLiked);
  const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked);

  return (
    <View style={styles.post}>
      {/* POST HEADER */}
      <View style={styles.postHeader}>
        {/* Link : by clicking the author it navigates to the author profile*/}
        <Link href={"/(tabs)/notifications"}>
            <TouchableOpacity style={styles.postHeaderLeft}>
            <Image
              source={post.author.image}
              style={styles.postAvatar}
              contentFit="cover"
              transition={200}
              cachePolicy="memory-disk"
            />
            <Text style={styles.postUsername}>{post.author.username}</Text>
          </TouchableOpacity>
        </Link>

        {/*todo: show a delete button, fix it later */}

        {/* 
            <TouchableOpacity>
                <Ionicons name='ellipsis-horizontal' size={20} color={COLORS.white}/>
            </TouchableOpacity>
        */}
        <TouchableOpacity>
            <Ionicons name='trash' size={20} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>

      {/* IMAGE */}
      <Image
        source={post.imageUrl}
        style={styles.postImage}
        contentFit="cover"
        transition={200}
        cachePolicy="memory-disk"
      />

      {/* POST ACTIONS: The buttons, where we can like, add a comment and bookmark etc. */}
      <View style={styles.postActions}>
        <View style={styles.postActionsLeft}>
          <TouchableOpacity>
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              size={24}
              color={isLiked ? COLORS.primary : COLORS.white}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={22} color={COLORS.white} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons
            name={isBookmarked ? "bookmark" : "bookmark-outline"}
            size={22}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>

      {/* POST INFO */}
      <View style={styles.postInfo}>
        <Text style={styles.likesText}>
          {post.likes > 0 ? `${post.likes.toLocaleString()} likes` : "Be the first to like"}
        </Text>
        {post.caption && (
          <View style={styles.captionContainer}>
            <Text style={styles.captionUsername}>{post.author.username}</Text>
            <Text style={styles.captionText}>{post.caption}</Text>
          </View>
        )}

       
          <TouchableOpacity>
            <Text style={styles.commentsText}>View all 2 comments</Text>
          </TouchableOpacity>

        <Text style={styles.timeAgo}>
            2 hours ago
        </Text>
      </View>

    </View>
  )
}