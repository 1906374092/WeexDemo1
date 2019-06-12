//
//  AppDelegate.m
//  WeexDemo1
//
//  Created by jianke on 2019/6/11.
//  Copyright © 2019 zyf. All rights reserved.
//

#import "AppDelegate.h"
#import "ViewController.h"
#import <WeexSDK.h>
#import "WXImgLoaderDefaultImpl.h"
#import "NetworkTool.h"
@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    
    ViewController *vc = [[ViewController alloc] init];
    UINavigationController *nav = [[UINavigationController alloc] initWithRootViewController:vc];
    self.window.rootViewController = nav;
    [self.window makeKeyAndVisible];
    
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        // App configuration
        [WXAppConfiguration setAppGroup:@"jk"];
        [WXAppConfiguration setAppName:@"WeexDemo1"];
        [WXAppConfiguration setAppVersion:@"0.0.1"];
        
        //Register custom modules and components, optional.
//        [WXSDKEngine registerComponent:@"myview" withClass:[MyViewComponent class]];
//        [WXSDKEngine registerModule:@"mymodule" withClass:[MyWeexModule class]];
        
        [WXSDKEngine registerHandler:[[WXImgLoaderDefaultImpl alloc] init] withProtocol:@protocol(WXImgLoaderProtocol)];
//        [WXSDKEngine registerHandler:[WXEventModule new] withProtocol:@protocol(WXEventModuleProtocol)];
        
//        [WXSDKEngine registerComponent:@"select" withClass:NSClassFromString(@"WXSelectComponent")];
//        [WXSDKEngine registerModule:@"event" withClass:[WXEventModule class]];
        //Initialize WeexSDK
        [WXSDKEngine initSDKEnvironment];
    });
    [self checkVersion];
    return YES;
}
-(void)checkVersion{
    [[NetworkTool sharedInstance] getWithUrl:@"http://192.168.36.71:7001/checkUpdate" prams:@{@"version":@"0.0.1"} success:^(NSDictionary * _Nonnull data) {
        if ([data[@"newVersion"] boolValue]) {
//            NSMutableArray *names = [[NSMutableArray alloc]init];
            NSMutableArray *exitsNames = [[NSUserDefaults standardUserDefaults] objectForKey:@"names"];
            if (!exitsNames) {
                exitsNames = [[NSMutableArray alloc]init];
            }
            for (NSDictionary *info in data[@"updatePage"]) {
                if (![exitsNames containsObject:info[@"name"]]) {
                    [exitsNames addObject:info[@"name"]];
                    [self downloadPatchWithUrl:info[@"path"] fileName:info[@"name"]];
                }
            }
            [[NSUserDefaults standardUserDefaults] setObject:exitsNames forKey:@"names"];
        }
    } failed:^(NSError * _Nonnull error) {
        
    }];
}
- (void)downloadPatchWithUrl:(NSString*)url fileName:(NSString*)fullPath{
    NSURLRequest *request = [NSURLRequest requestWithURL:[NSURL URLWithString:url]];
    NSString *path = [NSHomeDirectory() stringByAppendingPathComponent:@"Documents"];
    NSString *filePath = [path stringByAppendingPathComponent:url.lastPathComponent];
    
    /* 开始请求下载 */
    NSURLSessionDownloadTask *downloadTask = [[NetworkTool sharedInstance].manager downloadTaskWithRequest:request progress:^(NSProgress * _Nonnull downloadProgress) {
        NSLog(@"下载进度：%.0f％", downloadProgress.fractionCompleted * 100);
    } destination:^NSURL * _Nonnull(NSURL * _Nonnull targetPath, NSURLResponse * _Nonnull response) {
        dispatch_async(dispatch_get_main_queue(), ^{
            //如果需要进行UI操作，需要获取主线程进行操作
        });
        /* 设定下载到的位置 */
        return [NSURL fileURLWithPath:filePath];
        
    } completionHandler:^(NSURLResponse * _Nonnull response, NSURL * _Nullable filePath, NSError * _Nullable error) {
        if (!error) {
            NSLog(@"patch下载完成");
        }else{
            NSLog(@"patch下载失败");
        }
        
    }];
    [downloadTask resume];


}
- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}


@end
