//
//  WXImgLoaderDefaultImpl.m
//  WeexDemo1
//
//  Created by jianke on 2019/6/12.
//  Copyright © 2019 zyf. All rights reserved.
//

#import "WXImgLoaderDefaultImpl.h"
#import <UIImageView+WebCache.h>
@implementation WXImgLoaderDefaultImpl
-(id<WXImageOperationProtocol>)downloadImageWithURL:(NSString *)url imageFrame:(CGRect)imageFrame userInfo:(NSDictionary *)options completed:(void (^)(UIImage *, NSError *, BOOL))completedBlock{
    if ([url hasPrefix:@"//"]) {
        url = [@"http:" stringByAppendingString:url];
    }
    return (id<WXImageOperationProtocol>)[[SDWebImageManager sharedManager] loadImageWithURL:[NSURL URLWithString:url] options:0 progress:^(NSInteger receivedSize, NSInteger expectedSize, NSURL * _Nullable targetURL) {
        
    } completed:^(UIImage * _Nullable image, NSData * _Nullable data, NSError * _Nullable error, SDImageCacheType cacheType, BOOL finished, NSURL * _Nullable imageURL) {
        if (completedBlock) {
            completedBlock(image, error, finished);
        }
    }];
}
//- (void)setImageViewWithURL:(UIImageView *)imageView url:(NSURL *)url placeholderImage:(UIImage *)placeholder options:(NSDictionary *)options progress:(void (^)(NSInteger, NSInteger))progressBlock completed:(void (^)(UIImage *, NSError *, WXImageLoaderCacheType, NSURL *))completedBlock{
//
//}
//-(void)cancelCurrentImageLoad:(UIImageView *)imageView{
//
//}
@end
