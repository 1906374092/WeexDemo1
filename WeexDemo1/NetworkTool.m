//
//  NetworkTool.m
//  WeexDemo1
//
//  Created by jianke on 2019/6/12.
//  Copyright © 2019 zyf. All rights reserved.
//

#import "NetworkTool.h"
@interface NetworkTool()
@end
@implementation NetworkTool
+(instancetype)sharedInstance{
    static NetworkTool *instance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        instance = [[NetworkTool alloc]init];
        instance.manager = [AFHTTPSessionManager manager];
    });
    return instance;
}
-(void)getWithUrl:(NSString *)url prams:(nonnull NSDictionary *)params success:(void (^)(NSDictionary * _Nonnull))success failed:(void (^)(NSError * _Nonnull))fail{
    [self.manager GET:url parameters:params progress:^(NSProgress * _Nonnull downloadProgress) {
        
    } success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
        success((NSDictionary*)responseObject);
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        fail(error);
    }];
}
@end
