# subdomain-redirect

> Redirect service by access subdomain, powered by Cloudflare Workers and KV DB

## Notice

- Only 2nd level subdomains are supported. 
 > Because Cloudflare’s free SSL cert covered your domain and any 2nd level subdomain

## Deploy

1. create a worker

![gen1](image/gen1.jpg)

2. paste the code from ```index.js```

![gen2](image/gen2.jpg)

3. set KV database binding

![gen3](image/gen3.jpg)

4. create records in KV database

![gen4](image/gen4.jpg)

5. set route for ```*.example.com```

![gen5](image/gen5.jpg)

6. create DNS record for ```*.example.com``` 

![gen6](image/gen6.jpg)


## Reference

[Configuring SSL for multiple subdomains](https://community.cloudflare.com/t/configuring-ssl-for-multiple-subdomains/11771)

## Powered by

[Cloudflare Workers](https://workers.dev/)

## License

MIT
