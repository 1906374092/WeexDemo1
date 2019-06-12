//
//  WeexController.m
//  WeexDemo1
//
//  Created by jianke on 2019/6/11.
//  Copyright © 2019 zyf. All rights reserved.
//

#import "WeexController.h"
#import <WXSDKInstance.h>

@interface WeexController ()
@property (strong,nonatomic) WXSDKInstance *instance;

@end

@implementation WeexController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.navigationItem.title = @"weex 页面";
    self.view.backgroundColor = [UIColor whiteColor];
    
    _instance = [[WXSDKInstance alloc] init];
    _instance.viewController = self;
    _instance.frame = self.view.frame;
    __weak typeof(self) weakSelf = self;
    _instance.onCreate = ^(UIView *view) {
        //        [weakSelf.weexView removeFromSuperview];
        //        weakSelf.weexView = view;
        [weakSelf.view addSubview:view];
    };
    _instance.onFailed = ^(NSError *error) {
        //process failure, you could open an h5 web page instead or just show the error.
    };
    _instance.renderFinish = ^ (UIView *view) {
        //process renderFinish
    };

    [self renderPage];
    
    // Do any additional setup after loading the view.
}
-(void)renderPage{
    NSArray *names = [[NSUserDefaults standardUserDefaults] objectForKey:@"names"];
    if ([names containsObject:self.moduleName]) {
        NSString *path = [NSHomeDirectory() stringByAppendingPathComponent:@"Documents"];
         NSString *filePath = [path stringByAppendingPathComponent:[NSString stringWithFormat:@"%@.js",self.moduleName]];
        [_instance renderWithURL:[NSURL URLWithString:[NSString stringWithFormat:@"file://%@",filePath]] options:@{@"bundleUrl":@""} data:nil];
    }else{
        NSURL *url = [[NSBundle mainBundle] URLForResource:self.moduleName withExtension:@"js"];
        [_instance renderWithURL:url options:@{@"bundleUrl":[url absoluteString]} data:nil];
    }

}
-(void)dealloc{
    [self.instance destroyInstance];
}
/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
