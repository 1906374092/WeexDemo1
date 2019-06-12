//
//  NetworkTool.h
//  WeexDemo1
//
//  Created by jianke on 2019/6/12.
//  Copyright © 2019 zyf. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <AFNetworking.h>
NS_ASSUME_NONNULL_BEGIN

@interface NetworkTool : NSObject
@property (strong,nonatomic) AFHTTPSessionManager *manager;
+(instancetype)sharedInstance;
-(void)getWithUrl:(NSString*)url prams:(NSDictionary*)params success:(void (^)(NSDictionary *data))success failed:(void (^)(NSError *error))fail;
@end

NS_ASSUME_NONNULL_END
