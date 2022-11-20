FROM node:17-alpine AS builder
ENV NODE_ENV production
ENV PATH_SOLUTION=front

WORKDIR /app/${PATH_SOLUTION}


COPY ${PATH_SOLUTION}/package.json .
COPY ${PATH_SOLUTION}/yarn.lock .
RUN yarn install --production

COPY ${PATH_SOLUTION} .

RUN yarn build

FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production

# Copy built assets from builder
COPY --from=builder /app/front/build /usr/share/nginx/html

# Add your nginx.conf
COPY ./front/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 8086
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
