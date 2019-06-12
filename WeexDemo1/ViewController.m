//
//  ViewController.m
//  WeexDemo1
//
//  Created by jianke on 2019/6/11.
//  Copyright © 2019 zyf. All rights reserved.
//

#import "ViewController.h"
#import "WeexController.h"
@interface ViewController ()
@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.navigationItem.title = @"原生页面";
    self.view.backgroundColor = [UIColor whiteColor];
    
    for (int i = 0; i!=3; ++i) {
        UIButton *testBtn = [[UIButton alloc]initWithFrame:CGRectMake(80, 200+90*i, 200, 50)];
        testBtn.tag = 500+i;
        if (i == 2) {
            [testBtn setTitle:@"进入weex web页面" forState:UIControlStateNormal];
        }else{
            [testBtn setTitle:[NSString stringWithFormat:@"进入weex页面%d",(i+1)] forState:UIControlStateNormal];
        }
        testBtn.backgroundColor = [UIColor blueColor];
        [testBtn setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
        [testBtn addTarget:self action:@selector(runToRN:) forControlEvents:UIControlEventTouchUpInside];
        [self.view addSubview:testBtn];
    }
    // Do any additional setup after loading the view, typically from a nib.
}
-(void)runToRN:(UIButton*)sender{
    switch (sender.tag) {
        case 500:
            [self goToPageWithModule:@"index"];
            break;
        case 501:
            [self goToPageWithModule:@"index2"];
            break;
        case 502:
            [self goToWebPage];
            break;
        default:
            break;
    }
}
-(void)goToPageWithModule:(NSString*)moduleName{
    WeexController *weex = [[WeexController alloc]init];
    weex.moduleName = moduleName;
    [self.navigationController pushViewController:weex animated:YES];
}
-(void)goToWebPage{
    UIViewController *webVC= [[UIViewController alloc]init];
    UIWebView *webView = [[UIWebView alloc]initWithFrame: webVC.view.frame];
    NSURLRequest *request = [NSURLRequest requestWithURL:[NSURL URLWithString:@"http://192.168.36.71:7001/public/testpage.html"]];
    [webView loadRequest:request];
    
    [webVC.view addSubview:webView];
    [self.navigationController pushViewController:webVC animated:YES];
}
@end
